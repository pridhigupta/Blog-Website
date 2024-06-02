import { Link } from 'react-router-dom/cjs/react-router-dom';
import './singlePost.css'
import Footer from '../footer/Footer';
export default function
  () {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img
          src="https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/snow-winter-fallen-trees-700x529.jpg"
          alt="" className="singlePostImg" />
        <Link className='link' to='/post' ><h1 className="singlePostTitle">
          GOLDEN SNOW LAND
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        </Link>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>
            Author: <b>John</b>
          </span>
          <span className="singlePostDate">
            22 August 2023
          </span>
        </div>
        <p className='singlePostDesc'>
          Founded myself in a world straight out of a fairy tale today - the Golden Snow Land.
          It's a place where winter's icy grasp meets the warm embrace of the sun, creating a breathtaking harmony of nature's elements.
          <br />

          As I ventured deeper into this enchanting realm, I couldn't help but feel as though I had stepped into a world of pure magic.
          The snow-covered trees stood like guardians of this pristine land, their branches adorned with delicate icicles that sparkled like
          diamonds in the radiant sunlight. I marveled at the sheer beauty that surrounded me, capturing each moment with my camera, hoping to
          preserve these memories forever.
          <br />
          The play of light and shadows here is something out of a dream. As the sun's rays caressed the snowflakes, they glistened with a golden
          hue, turning the entire landscape into a mesmerizing display of nature's artistry. I couldn't resist the urge to lie down on the snow and
          simply bask in the warmth of the sun while being enveloped by the gentle coldness of winter.
          <br />

          As the day unfolded, I engaged in various winter activities, from cross-country skiing to snowshoeing. Each step was a testament to
          the purity and serenity of this place. I even had the exhilarating experience of a dog sled ride through the golden wilderness,
          feeling the crisp wind on my face and the excitement of the dogs leading the way.
          <br />
          As I write this journal entry, I'm reminded that the Golden Snow Land is not just a destination; it's an experience that transcends
          words and photographs. It's a place where winter's icy beauty and the sun's golden warmth come together to create a world of
          enchanting wonder. It's a sanctuary for those seeking solace, a haven for photographers capturing nature's exquisite moments, and
          an adventure for those who yearn to explore winter's captivating beauty.
          <br />
          The journey continues, and I can't wait to uncover more secrets of this magical realm. Until the next journal entry, I'll savor
          the beauty of the Golden Snow Land and let its enchantment seep into my soul.
        </p>
      </div>
      <Footer />
    </div>
  );
}
