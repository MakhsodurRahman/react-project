import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm mr-auto rounded-lg shadow-2xl"
        />
        <div className='ml-10'>
          <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eos!</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
