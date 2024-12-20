"use client";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
        {step}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}