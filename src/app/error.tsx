"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div>エラーが発生しました。</div>;
};

export default Error;
