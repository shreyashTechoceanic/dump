/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// ImageList type declaration


type ImageListType = {
  imageId: number;
  lowresolutionImgUrl: string;
  highresolutionImgUrl: string;
  alt: string;
};


// ImageList data
const ImageList = [
  {
    imageId: 1,
    lowresolutionImgUrl:
      'https://s3-alpha-sig.figma.com/img/2b91/9cda/1cbe19acfb2f8d58dcc5e6757aed6863?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZbq~oO9Vrp2E-A9n-hYmHXpQQALNrVwHB5pAaQURDvBlTkE7ZYNpEZiSREXukd9mlcQ1zfUwgvSFSYeog1xilbHnzUJ0tK-F0jQ-Ix3evGfTaRp-9hUH7u17y9Vl1CSupb2cbrJD1lLlt1IH1mcGGFQAVqWfZGYmCCJehVAbqe7YtFdDudfAhlaSdJy0AHeB5uLy-hVCDqjsf81vmx6NDtkf-0yjOJPZJdLxZ6NpyieFHTe~rCck387PKE5jMsPtIyZwYsvy9C22tS-0OjjIE2N~CLUY0Oaje4pzwukRPvJGETsneOJdTnKwHIVzr6oLgfQs6iANMigQfiOuUuILw__',
    highresolutionImgUrl:
      'https://s3-alpha-sig.figma.com/img/2b91/9cda/1cbe19acfb2f8d58dcc5e6757aed6863?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZbq~oO9Vrp2E-A9n-hYmHXpQQALNrVwHB5pAaQURDvBlTkE7ZYNpEZiSREXukd9mlcQ1zfUwgvSFSYeog1xilbHnzUJ0tK-F0jQ-Ix3evGfTaRp-9hUH7u17y9Vl1CSupb2cbrJD1lLlt1IH1mcGGFQAVqWfZGYmCCJehVAbqe7YtFdDudfAhlaSdJy0AHeB5uLy-hVCDqjsf81vmx6NDtkf-0yjOJPZJdLxZ6NpyieFHTe~rCck387PKE5jMsPtIyZwYsvy9C22tS-0OjjIE2N~CLUY0Oaje4pzwukRPvJGETsneOJdTnKwHIVzr6oLgfQs6iANMigQfiOuUuILw__',
    alt: 'Space Image',
  },
];


// ReelsDataType
interface User {
  id: string;
  username: string;
  profile_picture: string;
}

interface Comment {
  id: string;
  text: string;
  username: string;
  timestamp: string; 
  profile_picture: string;
}

interface Reel {
  id: string;
  media_type: "VIDEO" | "IMAGE";
  media_url: string;
  thumbnail_url: string;
  caption: string;
  username: string;
  timestamp: string;
  likes_count: number;
  comments_count: number;
  views_count: number;
  duration: number;
  user: User;
  comments: Comment[];
  liked_by: User[];
}

interface ReelsDataType {
  data: Reel[];
}


const reelsData: ReelsDataType = {
  data: [
    {
      id: "17895695668004550",
      media_type: "VIDEO",
      media_url: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail_url: "https://www.w3schools.com/w3images/lights.jpg",
      caption: "Check out my latest reel!",
      username: "example_user1",
      timestamp: "2023-07-01T12:34:56+0000",
      likes_count: 120,
      comments_count: 15,
      views_count: 500,
      duration: 15,
      user: {
        id: "123456789",
        username: "example_user1",
        profile_picture: "https://www.w3schools.com/w3images/avatar2.png",
      },
      comments: [
        {
          id: "17912099453004812",
          text: "Awesome reel!",
          username: "user1",
          timestamp: "2023-07-01T12:35:56+0000",
          profile_picture: "https://www.w3schools.com/w3images/avatar1.png",
        },
        {
          id: "17912099453004813",
          text: "Great job!",
          username: "user2",
          timestamp: "2023-07-01T12:36:56+0000",
          profile_picture: "https://www.w3schools.com/w3images/avatar6.png",
        },
      ],
      liked_by: [
        {
          id: "987654321",
          username: "liker1",
          profile_picture: "https://www.w3schools.com/w3images/avatar2.png",
        },
        {
          id: "876543210",
          username: "liker2",
          profile_picture: "https://www.w3schools.com/w3images/avatar5.png",
        },
        {
          id: "765432109",
          username: "liker3",
          profile_picture: "https://www.w3schools.com/w3images/avatar3.png",
        },
      ],
    },
    // Add more reels as needed...
  ],
};

export { ImageList, reelsData };
export type { ImageListType, ReelsDataType, Reel, Comment, User };
