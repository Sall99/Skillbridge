import { Allcourses, Overview } from "@/components";
import React from "react";

export default function Courses() {
  return (
    <>
      <Overview
        title={"Online Courses on Design and Development"}
        description={
          "Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
        }
      />

      <Allcourses />
    </>
  );
}
