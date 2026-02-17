import { clsx, type ClassValue } from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const handlePageTransition = async (
  href: string,
  router: AppRouterInstance,
) => {
  const body = document.querySelector("body");

  body?.classList.add("page-transition");

  await sleep(150);

  router.push(href);

  await sleep(1400);

  body?.classList.remove("page-transition");
};

export const handleHrefRoute = (href: string, router: AppRouterInstance) => {
  if (href.startsWith("/")) {
    // handlePageTransition(href, router);
    router.push(href);
  } else if (href.startsWith("#")) {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.open(href, "_blank");
  }
};

export const formatDate = (dateString: string): string => {
  if (dateString.toLowerCase() === "present") {
    return "Present";
  }

  const [year, month] = dateString.split("-");
  if (!month) return year!;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = parseInt(month, 10) - 1;
  return `${monthNames[monthIndex]} ${year}`;
};
