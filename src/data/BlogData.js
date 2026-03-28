let blogsData = [
     {
      id: 1,
      title: "The 5AM Club",
      description: "How a simple good book changed has made life more succesful."
    },
    {
      id: 2,
      title: "The Power of Journaling",
      description: "How writing down our daily tasks help us."
    },
    {
      id: 3,
      title: "Facing My Fears",
      description: "Stepping out of comfort zone helped me grow stronger."
    },
    {
      id: 4,
      title: "Learning Daily",
      description: "Even 30 minutes of learning can change your future."
    },
    {
      id: 5,
      title: "Time Management",
      description: "Planning your day improves productivity."
    }
  ];
export const getBlogs = () => blogsData;

export const addBlog = (newBlog) => {

  blogsData = [newBlog, ...blogsData]; 
};


   


export default blogsData;