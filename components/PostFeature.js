import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PostFeature = ({ post }) => {
  const [isPaid, setIsPaid] = useState(false);
  const router = useRouter();

  function handleBoxClick() {
    if (isPaid) {
      router.push(`/ispaid/${post.id}`);
    } else {
      router.push("/Subscribe");
    }
  }

  function checkSubscriptionStatus() {
    // Implement your subscription status checking logic here
    // Return true if the subscription has been paid for, false otherwise
    return false;
  }

  useEffect(() => {
    setIsPaid(checkSubscriptionStatus());
  }, []);

  return (
    <div
      className="border rounded-md p-4 cursor-pointer"
      onClick={handleBoxClick}
    >
      <img src={post.imageSrc} alt="" className="mb-4" />
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-500">{post.description}</p>
      {!isPaid && (
        <p className="text-red-500 mt-2">
          This post is only available to paid subscribers. Subscribe now to
          read!
        </p>
      )}
    </div>
  );
};

export default PostFeature;
