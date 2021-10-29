import Banner from '../../components/Banner/Banner';

const About = () => {
  return (
    <div>
      <Banner />
      <div className="my-4 md:flex justify-between items-center mx-4 px-2 shadow-lg rounded border py-2">
        <img
          src="https://images.unsplash.com/photo-1599443380179-33737c17ca81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFmdGluZ3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="rounded-lg m-2 shadow-lg md:w-1/3 mr-4 mx-auto sm:my-3"
        />
        <div className="mx-1 md:ml-4">
          <h2 className="text-5xl italic my-8 text-blue-800 font-bold">
            What makes us Unique?
          </h2>
          <p>
            <strong className="text-2xl text-blue-600">
              {' '}
              Why have over 300,000 people chosen to raft the American River
              with us?
            </strong>{' '}
            Our knowledge, expertise and experience, accumulated over 40 years
            of rafting the American River makes us the best choice. We offer you
            a high quality experience at an exceptional value. Our diverse and
            professional guides, the core of who we are, come from all over the
            world to share their stories and love of rafting with you. They are
            the most entertaining and highly qualified guide staff on the
            American River!
          </p>
          <br />
          <hr className="my-2" />
          <blockquote>
            <q className="text-xl italic">
              This is our profession and our life’s passion. It’s this unique
              wealth of knowledge and passion that we share with you that allows
              us to provide you with an unforgettable experience.
            </q>
            <hr className="my-2" />
            <p className="mt-3">
              Many guests have been amazed that a rafting trip entails so much
              more than just going down a river. When you raft with us you know
              you are getting a top quality trip and the best value for your
              money. Our rafting equipment is top of the line, our campsites and
              facilities are awesome with new clean restrooms and showers, in
              ground pool, volleyball court and much more. A professional chef
              will prepare your meals in camp that will keep you coming back for
              more. Our campground is also located smack in the middle of James
              Marshall Gold Discovery Park, an easy 5-minute walk from any one
              of our campsites or luxury riverside cabins.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
