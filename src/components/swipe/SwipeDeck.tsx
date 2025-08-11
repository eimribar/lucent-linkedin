import { useMemo, useState } from "react";
import SwipeCard from "@/components/swipe/SwipeCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface PostItem {
  id: string;
  text: string;
  author?: string;
}

const initialPosts: PostItem[] = [
  {
    id: "1",
    text:
      "Consistency compounds. Ship one improvement daily and share the why. That momentum becomes your personal brand.",
    author: "@you",
  },
  {
    id: "2",
    text:
      "Design for clarity, then add taste. Clean structure outperforms clever copy. Readers reward signal over noise.",
    author: "@you",
  },
  {
    id: "3",
    text:
      "Your unfair advantage: showing your work. Document > perform. People trust the builders they can see.",
    author: "@you",
  },
];

const SwipeDeck = () => {
  const [posts, setPosts] = useState<PostItem[]>(initialPosts);
  const [current, setCurrent] = useState(0);
  const [editOpen, setEditOpen] = useState(false);
  const [draftText, setDraftText] = useState("");

  const total = posts.length;
  const active = posts[current];

  const progress = useMemo(() => ((current) / Math.max(1, total)) * 100, [current, total]);

  const moveNext = () => {
    if (current < total - 1) setCurrent((i) => i + 1);
    else toast.success("All done — no more posts in the stack.");
  };

  const approve = () => {
    toast.success("Approved", { description: "Post moved to Schedule." });
    moveNext();
  };

  const decline = () => {
    toast.error("Needs revision", { description: "Sent back to Drafts." });
    moveNext();
  };

  const openEdit = () => {
    setDraftText(active?.text ?? "");
    setEditOpen(true);
  };

  const saveEdit = () => {
    setPosts((list) => list.map((p, i) => (i === current ? { ...p, text: draftText } : p)));
    setEditOpen(false);
    toast("Edited", { description: "Changes saved to this draft." });
  };

  if (!active) {
    return (
      <div className="elevation-1 bg-card rounded-2xl p-8 text-center">
        <h3 className="text-xl font-medium tracking-tight">No posts in the queue</h3>
        <p className="mt-2 text-sm text-muted-foreground">You're fully reviewed. Add more drafts to continue.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
      <div>
        <SwipeCard
          text={active.text}
          author={active.author}
          onSwipe={(dir) => {
            if (dir === "right") approve();
            if (dir === "left") decline();
          }}
        />
        <div className="mt-4 flex items-center justify-between">
          <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-1 bg-foreground/80" style={{ width: `${progress}%` }} />
          </div>
          <span className="ml-3 text-xs text-muted-foreground">
            {current + 1} / {total}
          </span>
        </div>
      </div>

      <aside className="elevation-2 bg-card rounded-2xl p-6">
        <h3 className="text-lg font-medium tracking-tight">Actions</h3>
        <p className="mt-2 text-sm text-muted-foreground">Approve, request changes, or quickly edit the draft.</p>

        <div className="mt-6 grid grid-cols-1 gap-3">
          <Button variant="premium" size="pill" onClick={approve} aria-label="Approve">
            Approve
          </Button>
          <Button variant="destructive" size="pill" onClick={decline} aria-label="Request changes">
            Decline
          </Button>

          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="pill" onClick={openEdit} aria-label="Edit">
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[560px]">
              <DialogHeader>
                <DialogTitle>Edit draft</DialogTitle>
              </DialogHeader>
              <Textarea
                value={draftText}
                onChange={(e) => setDraftText(e.target.value)}
                className="min-h-[200px]"
                aria-label="Draft text"
              />
              <DialogFooter>
                <Button variant="soft" onClick={() => setEditOpen(false)}>Cancel</Button>
                <Button variant="premium" onClick={saveEdit}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          Tip: Swipe right to approve, left to decline. Use the Edit dialog for quick fixes.
        </div>
      </aside>
    </div>
  );
};

export default SwipeDeck;
