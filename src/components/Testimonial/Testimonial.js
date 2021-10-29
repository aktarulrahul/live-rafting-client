import React from 'react';

const Testimonial = () => {
  return (
    <div className="px-4 py-8 bg-blue-600 text-white md:grid grid-cols-2 gap-4">
      <div className="mx-2 my-4">
        <blockquote>
          <q className="text-xl italic">
            We had such a great time. Everything went over smoothly and our
            guide was very knowledgeable. I would absolutely recommend them to
            anyone. They really exceeded my expectations. I know I'll be back
            for sure!
          </q>
        </blockquote>
        <div className="flex my-4  items-center">
          <img
            src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="mr-2 rounded-full h-20 w-20"
          />
          <p>Amy Johnson</p>
        </div>
      </div>
      <div className="mx-2 my-4">
        <blockquote>
          <q className="text-xl italic">
            Amazing trip; Great whitewater, food, and awesome guides. We had an
            excellent trip. Big group, but easily accommodated by Thrillz Co.
            The food was amazing, the weather was perfect, and the rafting was
            fun
          </q>
        </blockquote>
        <div className="flex my-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="mr-2 rounded-full h-20 w-20"
          />
          <p>Doug Martin</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
