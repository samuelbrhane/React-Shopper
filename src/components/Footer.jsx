const Footer = ({ content }) => {
  return (
    <div className="z-30 mt-4">
      {content && (
        <div className="pb-2 pt-6 grid grid-cols-4 gap-6 footer px-8 ">
          <div className="categories">
            <h3 className="mb-1">Categories</h3>
            <p>Special Sell</p>
            <p>New Arrival</p>
            <p>Men's</p>
            <p>Women's</p>
            <p>Kid's</p>
            <p>Accessories</p>
          </div>
          <div className="links">
            <h3 className="mb-1">Links</h3>
            <p>FAQ</p>
            <p>Pages</p>
            <p>Stores</p>
            <p>Compare</p>
            <p>Cookies</p>
          </div>
          <div>
            <h3 className="mb-1">About</h3>
            <p className="about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus dolor ut magni? Voluptates, neque ipsam
              voluptatibus autem in ullam odio at assumenda nisi tempore, illum
              similique expedita ipsa officia explicabo. Minus debitis quos sed
              vel sit atque excepturi temporibus eaque reprehenderit illo. Quia
              distinctio corrupti nobis ipsa nostrum expedita. Consectetur.
            </p>
          </div>
          <div>
            <h3 className="mb-1">Contact</h3>
            <p className="contact">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus quisquam labore vel consequatur itaque a numquam
              perspiciatis consectetur, obcaecati quia nemo libero? Amet placeat
              corrupti tempore pariatur aut rem assumenda porro veritatis optio
              incidunt! Dicta libero quasi, nihil ex laborum velit omnis,
              ducimus minus suscipit a doloribus cumque qui et!
            </p>
          </div>
        </div>
      )}
      <h4 className="bg-blue-500 py-4 text-center text-white">
        &#169; Copyright 2022 Samuel Brhane
      </h4>
    </div>
  );
};

export default Footer;
