"use client";

import { useState } from "react";
import AuditForm from "@/components/AuditForm";
import AuditResults from "@/components/AuditResults";

export default function AuditPage() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [score, setScore] = useState<number>(0);
  const [scoreBand, setScoreBand] = useState<string>("");

  const handleFormComplete = (data: any, calculatedScore: number, band: string) => {
    setFormData(data);
    setScore(calculatedScore);
    setScoreBand(band);
    setShowResults(true);
  };

  const handleRestart = () => {
    setShowResults(false);
    setFormData(null);
    setScore(0);
    setScoreBand("");
  };

  return (
    <>
      {!showResults ? (
        <AuditForm onComplete={handleFormComplete} />
      ) : (
        <AuditResults 
          formData={formData} 
          score={score} 
          scoreBand={scoreBand}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}
