import React, { useState} from 'react'
import Delliverycarousel from './Delliverycarousel';
import { Rest } from '../Rest';



const Del = () => {
  const [restaurantlist, setrestaurant] = useState([{
    id: 123,
    name: "somoos",
    Image: "https://b.zmtcdn.com/data/pictures/2/52122/cb783d47f53b9fa3109e55b33e3cca5d_o2_featured_v2.jpg",
    ispro: true,
    restaurantReviewValue: 24,
    cuisine: "jo,jo,ho",
    averageecost: 45,
    isoff: 50,
  }, {
    id: 1233,
    name: "somoos",
    Image: "https://b.zmtcdn.com/data/pictures/2/52122/cb783d47f53b9fa3109e55b33e3cca5d_o2_featured_v2.jpg",
    ispro: true,
    restaurantReviewValue: 24,
    cuisine: "jo,jo,ho",
    averageecost: 45,
    isoff: 50,
  }
    , {
    id: 1232,
    name: "somoos",
    Image: "https://b.zmtcdn.com/data/pictures/2/52122/cb783d47f53b9fa3109e55b33e3cca5d_o2_featured_v2.jpg",
    ispro: true,
    restaurantReviewValue: 24,
    cuisine: "jo,jo,ho",
    averageecost: 45,
    isoff: 50,
  }
    , {
    id: 1231,
    name: "somoos",
    Image: "https://b.zmtcdn.com/data/pictures/2/52122/cb783d47f53b9fa3109e55b33e3cca5d_o2_featured_v2.jpg",
    ispro: true,
    restaurantReviewValue: 24,
    cuisine: "jo,jo,ho",
    averageecost: 45,
    isoff: 50,
  }
    , {
    id: 1236,
    name: "somoos",
    Image: "https://b.zmtcdn.com/data/pictures/2/52122/cb783d47f53b9fa3109e55b33e3cca5d_o2_featured_v2.jpg",
    ispro: true,
    restaurantReviewValue: 24,
    cuisine: ["jo,jo,ho","hs,po"],
    averageecost: 45,
    isoff: 50,
  }]);

  return (
    <><div className="px-70 "><Delliverycarousel />
      <div className='flex flex-wrap  '>{
        restaurantlist.map((card) => {return(
          <Rest {...card}  key={card.id} />);
        })
      }

      </div>
    </div>
    </>);
}
export default Del;