const fs = require('fs');

let content = fs.readFileSync('pages/Assessment.tsx', 'utf-8');

// Replace the Email Gate section
const oldEmailGate = `  // Render Email Gate
  if (step === ASSESSMENT_QUESTIONS.length + 1) {
    return (
      <div className="bg-[#F6F5F2] min-h-screen py-16 px-6">
        <div className="max-w-xl mx-auto space-y-10 animate-in fade-in duration-500 pt-10">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 size={32} />
            </div>
            <h1 className="font-serif text-[36px] leading-[1.1] text-[#2C3539] tracking-tight">
              YOUR PERSONALISED GLP-1 GAME PLAN
            </h1>
            <h3 className="text-[20px] font-medium text-[#2C3539]/90">
              You've completed the assessment.
            </h3>
            <div className="text-[16px] text-[#2C3539]/80 leading-relaxed text-left bg-white p-6 rounded-2xl border border-neutral-200">
              Enter your email and we'll send you your personalised results, including:
              <ul className="list-disc pl-5 pt-3 space-y-2">
                <li>Your GLP-1 Fitness Score</li>
                <li>Your strongest areas & biggest opportunities</li>
                <li>Your top three priorities</li>
                <li>Your personalised 7-day action plan</li>
              </ul>
            </div>
          </div>
          <form onSubmit={submitAssessment} className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="First Name"
                required
                className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A9A86]/50 focus:border-[#8A9A86] transition-all text-[16px]"
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A9A86]/50 focus:border-[#8A9A86] transition-all text-[16px]"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2C3539] hover:bg-[#1A1F22] disabled:bg-[#2C3539]/70 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center text-[16px]"
            >
              {isSubmitting ? 'PROCESSING...' : 'GET MY RESULTS'}
              {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
            </button>
            <p className="text-[13px] text-[#2C3539]/60 text-center leading-relaxed">
              No spam. Just practical information to help you get more from your GLP-1 journey. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    );
  }`;

const newEmailGate = `  // Render Email Gate
  if (step === ASSESSMENT_QUESTIONS.length + 1) {
    const teaseResult = calculateAssessmentResult(answers);
    return (
      <div className="bg-[#F6F5F2] min-h-screen py-16 px-6">
        <div className="max-w-xl mx-auto space-y-8 animate-in fade-in duration-500 pt-10">
          <div className="text-center space-y-6">
            <h4 className="text-[14px] font-bold tracking-widest text-[#2C3539]/60 uppercase">
              Assessment Complete
            </h4>
            <h1 className="font-serif text-[40px] leading-[1.1] text-[#2C3539] tracking-tight">
              YOUR SCORE: {teaseResult.overallScore} <span className="text-[24px] text-[#2C3539]/50">/ 100</span>
            </h1>
            <p className="text-[18px] text-[#2C3539]/80 leading-relaxed max-w-md mx-auto">
              Based on your answers, your biggest opportunities for improvement are <span className="font-bold capitalize">{teaseResult.primaryFocus}</span> and <span className="font-bold capitalize">{teaseResult.secondaryFocus}</span>.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="font-serif text-[24px] text-[#2C3539] mb-3">
                Unlock Your Custom Action Plan
              </h3>
              <p className="text-[15px] text-[#2C3539]/70">
                Where should we send your detailed pillar breakdown and personalised 7-day strategy?
              </p>
            </div>
            
            <form onSubmit={submitAssessment} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="First Name"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A9A86]/50 focus:border-[#8A9A86] transition-all text-[16px]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A9A86]/50 focus:border-[#8A9A86] transition-all text-[16px]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8A9A86] hover:bg-[#768672] disabled:bg-[#8A9A86]/70 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center text-[16px]"
              >
                {isSubmitting ? 'PROCESSING...' : 'VIEW FULL RESULTS'}
                {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
              </button>
              <p className="text-[13px] text-[#2C3539]/60 text-center leading-relaxed">
                No spam. Just practical information to help you get more from your GLP-1 journey. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }`;

if (content.includes(oldEmailGate)) {
  content = content.replace(oldEmailGate, newEmailGate);
  fs.writeFileSync('pages/Assessment.tsx', content);
  console.log("Email gate replaced successfully.");
} else {
  console.log("Old email gate not found. Trying regex...");
  
  const regex = /\/\/ Render Email Gate\s+if \(step === ASSESSMENT_QUESTIONS\.length \+ 1\) \{[\s\S]*?\n  \}\s+\/\/ Render Results/;
  
  if (regex.test(content)) {
    content = content.replace(regex, newEmailGate + "\n  // Render Results");
    fs.writeFileSync('pages/Assessment.tsx', content);
    console.log("Email gate replaced using regex.");
  } else {
    console.log("Could not find the email gate section.");
  }
}
