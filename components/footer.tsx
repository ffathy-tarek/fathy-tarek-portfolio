export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} Fathy Tarek Sanad. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
