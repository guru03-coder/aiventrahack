import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Linkedin, MapPin, Sparkles, Trophy, Users, Zap } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import themePoster from "@/assets/aiventra-theme.png";
import hackhereLogo from "@/assets/hackhere-logo.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const hosts = [
  { name: "Guru", linkedin: "https://www.linkedin.com/in/k-guru-prakash-9a4184337/" },
  { name: "Shubba Shree", linkedin: "https://www.linkedin.com/in/shubaashreesureshbabu/" },
  { name: "Rithika", linkedin: "https://www.linkedin.com/in/rithika-somasundaram/" },
  { name: "Ezhil", linkedin: "https://www.linkedin.com/in/kk-ezhil-6a31a6235/" },
];

const partnerPerks = [
  "Promotion across all AIVENTRA channels",
  "Showcase your community at the event with standee and recognition",
  "Logo featured on all marketing creatives",
  "AI credits and partner benefits",
  "Exciting rewards and opportunities for your members",
];

const partnerResponsibilities = [
  "Promote AIVENTRA within your community",
  "Bring participants and at least 5 teams",
  "Support engagement and outreach",
];

const offlineEligibility = [
  "Minimum activity-based points",
  "At least 5 teams registered",
  "Maximum 2 community representatives",
];

const currentMomentum = [
  "Growing number of communities joining",
  "Increasing registrations",
  "Multiple sponsors and partners onboard",
];

const contributions = [
  "Marketing & Promotion",
  "Speaker & Mentor Connections",
  "Community Problem Statements",
  "On-ground Engagement & Support",
];

const registrationSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  communityName: z.string().trim().min(1).max(120),
  communityType: z.string().trim().min(1).max(80),
  communitySize: z.string().trim().min(1).max(80),
  communityWebsite: z.string().trim().max(255).optional(),
  instagramHandle: z.string().trim().min(1).max(80),
  representativeName: z.string().trim().min(1).max(100),
  contactDetails: z.string().trim().min(7).max(40),
  contributions: z.array(z.string().max(80)).min(1).max(4),
  problemStatement: z.string().trim().min(20).max(1200),
  logoUploaded: z.string().trim().min(1).max(120),
  whatsappJoined: z.string().trim().min(1).max(120),
  termsAccepted: z.boolean().refine((value) => value, "Terms must be accepted"),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

// TODO: Replace with your own backend (Supabase, Google Sheets API, etc.)
async function submitRegistrationClient(data: RegistrationForm): Promise<{ success: boolean }> {
  console.log("Registration submitted:", data);
  // Simulate a small delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { success: true };
}

function Index() {
  const [registrationOpen, setRegistrationOpen] = useState(false);

  return (
    <main className="min-h-[100svh] bg-background text-foreground">
      <section className="star-field cyber-grid relative min-h-[100svh] overflow-hidden bg-[image:var(--gradient-hero)] px-[max(1rem,env(safe-area-inset-left))] py-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-[max(1.5rem,env(safe-area-inset-left))] lg:px-[max(2rem,env(safe-area-inset-left))]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
          <aside className="space-y-5 lg:sticky lg:top-6">
            <div className="scanline flex max-h-[58svh] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-panel)] lg:max-h-[62svh]">
              <img
                src={themePoster}
                alt="Aiventra neon hackathon poster"
                className="h-full w-full bg-card object-contain"
              />
            </div>

            <div className="rounded-2xl border border-border bg-panel p-5 shadow-[var(--shadow-panel)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={hackhereLogo}
                    alt="HackHere logo"
                    className="h-10 w-10 rounded-lg border border-border object-cover"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Presented by</p>
                    <p className="font-semibold text-card-foreground">HACKHERE</p>
                  </div>
                </div>
                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => {
                    window.location.href = "https://chat.whatsapp.com/CgDMOJhp7ut0PV9iWTm7DP?mode=gi_t";
                  }}
                >
                  Subscribe
                </Button>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="mb-4 text-xs uppercase tracking-[0.26em] text-neon-gold">Hosted By</p>
                <div className="space-y-3">
                  {hosts.map((host) => (
                    <div key={host.name} className="flex items-center justify-between gap-3 text-sm">
                      <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                        {host.name.charAt(0)}
                      </span>
                      <span className="truncate">{host.name}</span>
                      </div>
                      <a
                        href={host.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${host.name} LinkedIn profile`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-neon-cyan transition-colors hover:border-accent hover:bg-accent/20"
                      >
                        <Linkedin className="size-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          <div className="space-y-7 py-2 lg:py-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/50 bg-primary/15 px-3 py-1 text-xs font-semibold text-neon-pink shadow-[var(--shadow-neon)]">
                ✦ Private Event
              </span>
              <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-semibold text-neon-cyan">
                Approval Required
              </span>
            </div>

            <header className="space-y-5">
              <p className="text-sm font-bold uppercase tracking-[0.36em] text-neon-cyan">HackHere presents</p>
              <h1 className="neon-title max-w-4xl text-5xl font-black uppercase leading-none tracking-normal text-foreground sm:text-7xl lg:text-8xl">
                Aiventra
              </h1>
              <p className="max-w-3xl text-2xl font-extrabold uppercase text-neon-pink sm:text-3xl">
                Call for Community Partners
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoTile icon={<CalendarDays />} label="Date" value="9th and 10th May" />
              <InfoTile icon={<MapPin />} label="Location" value="Intro Works, Chennai Trade Centre, Nadambakkam" />
              <InfoTile icon={<Zap />} label="Duration" value="24 Hours Hackathon" />
              <InfoTile icon={<Trophy />} label="Prize Pool" value="1 Lakh" />
            </div>

            <section className="rounded-2xl border border-border bg-panel shadow-[var(--shadow-panel)] backdrop-blur-xl">
              <div className="border-b border-border px-5 py-3 text-sm uppercase tracking-[0.24em] text-neon-gold">
                Registration
              </div>
              <div className="space-y-5 p-5">
                <div className="flex gap-3">
                  <Users className="mt-1 size-5 text-neon-pink" />
                  <div>
                    <h2 className="font-bold text-card-foreground">Approval Required</h2>
                    <p className="text-sm text-muted-foreground">Your registration is subject to host approval.</p>
                  </div>
                </div>
                <p className="text-card-foreground">Welcome! To join the event, please register below.</p>
                <Button
                  variant="cyber"
                  size="lg"
                  className="w-full text-base font-black uppercase"
                  onClick={() => setRegistrationOpen(true)}
                >
                  Request to Join
                </Button>
              </div>
            </section>

            <section className="space-y-5 rounded-2xl border border-border bg-panel p-6 shadow-[var(--shadow-panel)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Sparkles className="size-5 text-neon-cyan" />
                <h2 className="text-sm font-bold uppercase tracking-[0.28em] text-neon-cyan">About Event</h2>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-neon-pink">
                🚨 Final Call – Community Partners | AIVENTRA Hackathon 2026 🚨
              </p>
              <p className="text-lg leading-8 text-panel-foreground">
                We’re inviting top tech communities across India to join us as Community Partners for
                AIVENTRA Hackathon 2026. This is your opportunity to represent your community on a bigger
                stage and build solutions that create real impact 🔥
              </p>
              <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-neon-gold">🌟 What Your Community Gets</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {partnerPerks.map((perk) => (
                  <div key={perk} className="rounded-xl border border-border bg-card/60 p-4 text-sm text-card-foreground">
                    {perk}
                  </div>
                ))}
              </div>
              <InfoList title="🎯 What You Need to Do" items={partnerResponsibilities} />
              <InfoList title="🏆 Eligibility for Offline Round" items={offlineEligibility} />
              <InfoList title="📊 Current Momentum" items={currentMomentum} />
            </section>
          </div>
        </div>
      </section>

      <RegistrationDialog open={registrationOpen} onOpenChange={setRegistrationOpen} />
    </main>
  );
}

const initialForm: RegistrationForm = {
  name: "",
  email: "",
  communityName: "",
  communityType: "",
  communitySize: "",
  communityWebsite: "",
  instagramHandle: "",
  representativeName: "",
  contactDetails: "",
  contributions: [],
  problemStatement: "",
  logoUploaded: "",
  whatsappJoined: "",
  termsAccepted: false,
};

function RegistrationDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [form, setForm] = useState<RegistrationForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = <K extends keyof RegistrationForm>(key: K, value: RegistrationForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const toggleContribution = (value: string) => {
    setForm((current) => ({
      ...current,
      contributions: current.contributions.includes(value)
        ? current.contributions.filter((item) => item !== value)
        : [...current.contributions, value],
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const parsed = registrationSchema.safeParse(form);
    if (!parsed.success) {
      setStatus("error");
      setError("Please complete all required fields correctly.");
      return;
    }

    try {
      await submitRegistrationClient(parsed.data);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError("Could not submit right now. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(86svh,760px)] max-w-xl overflow-y-auto border-border bg-background p-6 text-foreground sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-foreground">Your Info</DialogTitle>
        </DialogHeader>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <FormField label="Name *"><Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your Name" required /></FormField>
          <FormField label="Email *"><Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" required /></FormField>
          <FormField label="Community Name *"><Input value={form.communityName} onChange={(e) => update("communityName", e.target.value)} required /></FormField>
          <FormSelect label="Community Type *" value={form.communityType} onValueChange={(value) => update("communityType", value)} options={["College club", "Developer community", "Startup community", "Tech society", "Other"]} />
          <FormSelect label="Community Size *" value={form.communitySize} onValueChange={(value) => update("communitySize", value)} options={["1-50", "51-100", "101-250", "251-500", "500+"]} />
          <FormField label="Community Website"><Input value={form.communityWebsite} onChange={(e) => update("communityWebsite", e.target.value)} /></FormField>
          <FormField label="Community Instagram Handle (@username) *"><Input value={form.instagramHandle} onChange={(e) => update("instagramHandle", e.target.value)} required /></FormField>
          <FormField label="Your Name (Representative) *"><Input value={form.representativeName} onChange={(e) => update("representativeName", e.target.value)} required /></FormField>
          <FormField label="Contact Details *"><Input value={form.contactDetails} onChange={(e) => update("contactDetails", e.target.value)} placeholder="+91 81234 56789" required /></FormField>

          <div className="space-y-3">
            <Label>How can your community contribute to HackHere 2026? *</Label>
            <div className="grid gap-2 rounded-md border border-input bg-card/40 p-3">
              {contributions.map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <Checkbox checked={form.contributions.includes(item)} onCheckedChange={() => toggleContribution(item)} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <FormField label="Problem Statement Submission - Submit one problem statement that your community wants participants to solve. Make sure your problem statement: • Is real and meaningful • Can be solved within a 12-hour hackathon • Has clear impact for your community or users *">
            <Textarea className="min-h-28" value={form.problemStatement} onChange={(e) => update("problemStatement", e.target.value)} required />
          </FormField>
          <FormField
            label={
              <>
                Have you uploaded your community logo to the shared drive?{" "}
                <a className="text-neon-gold underline" href="https://drive.google.com/drive/folders/1JfGe086OVMfuMrO9SAgY9G1Rk_oOZHCQ" target="_blank" rel="noreferrer">
                  https://drive.google.com/drive/folders/1JfGe086OVMfuMrO9SAgY9G1Rk_oOZHCQ
                </a>{" "}
                *
              </>
            }
          >
            <Input value={form.logoUploaded} onChange={(e) => update("logoUploaded", e.target.value)} required />
          </FormField>
          <FormField
            label={
              <>
                Community Partners WhatsApp Group (Mandatory) 👉 Join here:{" "}
                <a className="text-neon-gold underline" href="https://chat.whatsapp.com/CgDMOJhp7ut0PV9iWTm7DP?mode=gi_t" target="_blank" rel="noreferrer">
                  https://chat.whatsapp.com/CgDMOJhp7ut0PV9iWTm7DP?mode=gi_t
                </a>{" "}
                Please join the group and type “Yes” to confirm your participation. *
              </>
            }
          >
            <Input value={form.whatsappJoined} onChange={(e) => update("whatsappJoined", e.target.value)} required />
          </FormField>

          <label className="flex items-start gap-3 text-sm text-foreground">
            <Checkbox checked={form.termsAccepted} onCheckedChange={(checked) => update("termsAccepted", checked === true)} />
            <span>By registering, I agree to the <span className="text-neon-gold">event terms</span>. *</span>
          </label>

          {error && <p className="text-sm font-semibold text-destructive">{error}</p>}
          {status === "success" && <p className="text-sm font-semibold text-neon-cyan">Your request has been submitted. We will let you know the status as soon as possible.</p>}
          <Button type="submit" variant="cyber" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Request to Join"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function FormField({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return <div className="space-y-2"><Label>{label}</Label>{children}</div>;
}

function FormSelect({ label, value, onValueChange, options }: { label: string; value: string; onValueChange: (value: string) => void; options: string[] }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger><SelectValue placeholder="Select an option" /></SelectTrigger>
        <SelectContent>{options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
      </Select>
    </div>
  );
}

function InfoTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="group rounded-2xl border border-border bg-panel p-5 shadow-[var(--shadow-panel)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-neon)]">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/50 bg-accent/10 text-neon-cyan transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-xl font-black uppercase text-card-foreground">{value}</p>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-neon-gold">{title}</h3>
      <div className="grid gap-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-card-foreground">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}