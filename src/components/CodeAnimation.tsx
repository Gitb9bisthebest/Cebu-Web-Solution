import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeAnimationProps {
  code: string;
  language?: string;
  className?: string;
}

export const CodeAnimation: React.FC<CodeAnimationProps> = ({
  code = '<div class="hello-world">Hello World</div>',
  language = "html",
  className,
}) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < code.length && isTyping) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + code[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 100 + 30); // Random typing speed for natural effect

      return () => clearTimeout(timer);
    } else if (currentIndex >= code.length) {
      setIsTyping(false);
    }
  }, [currentIndex, code, isTyping]);

  // Colorize HTML/CSS/JS syntax for simple highlighting
  const colorizeCode = (text: string) => {
    if (language === "html") {
      return text
        .replace(
          /(&lt;[\/]?[a-z0-9]+)/g,
          '<span class="text-orange-400">$1</span>'
        )
        .replace(/(class="[^"]+")/g, '<span class="text-green-400">$1</span>');
    } else if (language === "css") {
      return text
        .replace(/([a-z\-]+:)/g, '<span class="text-purple-400">$1</span>')
        .replace(/(\{|\})/g, '<span class="text-yellow-400">$1</span>');
    } else if (language === "js") {
      return text
        .replace(
          /(function|const|let|var|return|if|else)/g,
          '<span class="text-blue-400">$1</span>'
        )
        .replace(/(\(|\)|\{|\})/g, '<span class="text-yellow-300">$1</span>');
    }
    return text;
  };

  const formattedCode = colorizeCode(
    displayedCode.replace(/</g, "&lt;").replace(/>/g, "&gt;")
  );

  return (
    // <pre className={cn("code-block overflow-x-auto text-left", className)}>
    <pre
      className={cn(
        "code-block overflow-x-auto text-left rounded-md p-4",
        "bg-[#0D0E17] text-white", // light mode background
        "dark:bg-[#0D0E17] dark:text-white", // dark mode background
        "shadow-lg border border-gray-700",
        className
      )}
    >
      <code
        className="font-mono text-sm text-gray-200"
        dangerouslySetInnerHTML={{ __html: formattedCode }}
      />
      {isTyping && <span className="typewriter-cursor"></span>}
    </pre>
  );
};

export default CodeAnimation;
