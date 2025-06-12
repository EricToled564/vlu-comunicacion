
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      company,
      subject,
      service,
      budget,
      timeline,
      message
    } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || '',
        company: company || '',
        subject,
        message: `
Servicio de interés: ${service || 'No especificado'}
Presupuesto: ${budget || 'No especificado'}
Timeline: ${timeline || 'No especificado'}

Mensaje:
${message}
        `.trim(),
        formType: 'contact',
        status: 'new'
      }
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado exitosamente',
        id: submission.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}
