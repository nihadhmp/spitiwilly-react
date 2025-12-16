import { useState } from "react";

const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitToEndpoint = async (formData, endpoint) => {
    setIsSubmitting(true);

    try {
      // Save to localStorage (for record keeping)
      const key = "spitiwilly_leads";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      const payload = {
        ...formData,
        _received: new Date().toISOString(),
        _page: window.location.pathname,
      };
      existing.push(payload);
      localStorage.setItem(key, JSON.stringify(existing));

      // Submit to Formspree
      const formSpreeEndpoint = endpoint || "https://formspree.io/f/xdkqllrk";

      const response = await fetch(formSpreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return { success: true };
      } else {
        throw new Error("Network response not ok");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitToEndpoint };
};

export default useFormSubmission;
