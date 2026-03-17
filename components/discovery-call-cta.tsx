"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Calendar, CheckCircle2, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DiscoveryCallDialog() {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [meetingData, setMeetingData] = React.useState<{
    link: string;
    time: string;
  } | null>(null);

  async function handleSchedule(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const dateTime = formData.get("dateTime");

    try {
      const res = await fetch("/api/schedule-meeting", {
        method: "POST",
        body: JSON.stringify({ email, dateTime }),
      });

      if (res.ok) {
        const data = await res.json();
        setMeetingData({ link: data.hangoutLink, time: data.startTime });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  }

  useEffect(() => {
    // Use ReturnType to stay environment-agnostic
    let tOut: ReturnType<typeof setTimeout> | undefined;

    if (status === "success") {
      tOut = setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }

    // No need to check if tOut exists; clearTimeout handles undefined/null gracefully
    return () => clearTimeout(tOut);
  }, [status, setStatus]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          Schedule a Call
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-6 space-y-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <DialogHeader>
              <DialogTitle>Meeting Confirmed!</DialogTitle>
              <DialogDescription>
                We've sent the Google Meet link to your email.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-muted p-4 rounded-lg w-full text-sm">
              <p className="font-semibold flex items-center justify-center gap-2">
                <Video className="h-4 w-4" /> Google Meet Link Sent
              </p>
              <p className="mt-1 text-muted-foreground">
                Scheduled for: {new Date(meetingData?.time!).toLocaleString()}
              </p>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Book a Discovery Call</DialogTitle>
              <DialogDescription>
                Select a time for a 30-minute technical consultation.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSchedule} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateTime">Preferred Date & Time</Label>
                <Input
                  id="dateTime"
                  name="dateTime"
                  type="datetime-local"
                  required
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Failed to schedule. Please try again.
                </p>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <Loader2 className="animate-spin mr-2" />
                ) : (
                  <Calendar className="mr-2 h-4 w-4" />
                )}
                Confirm Booking
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
