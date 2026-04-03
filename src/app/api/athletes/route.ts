import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database';
import { z } from 'zod';

const AthleteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  sportType: z.string().min(1, "Sport type is required"),
  experienceLevel: z.string().min(1, "Experience level is required"),
  testType: z.string().min(1, "Test type is required"),
  testDate: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
});

export async function GET() {
  try {
    const athletes = await prisma.athlete.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(athletes);
  } catch (err) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    console.error('FETCH_ATHLETES_ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to fetch athletes', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = AthleteSchema.parse(body);

    // Duplicate email check
    const existingAthlete = await prisma.athlete.findUnique({
      where: { email: validatedData.email },
    });

    if (existingAthlete) {
      return NextResponse.json(
        { error: 'An athlete with this email already exists' },
        { status: 400 }
      );
    }

    const athlete = await prisma.athlete.create({
      data: {
        ...validatedData,
        testDate: new Date(validatedData.testDate),
      },
    });

    return NextResponse.json(athlete, { status: 201 });
  } catch (err) {
    const error = err instanceof Error ? err : new Error('Internal server error');
    
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: err.issues },
        { status: 400 }
      );
    }

    console.error('REGISTRATION_API_ERROR:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Athlete ID is required' }, { status: 400 });
    }

    await prisma.athlete.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true, message: 'Athlete deleted successfully' });
  } catch (err) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    console.error('DELETE_ATHLETE_ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to delete athlete', details: error.message },
      { status: 500 }
    );
  }
}
