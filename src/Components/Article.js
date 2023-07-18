import React from 'react';

function Article() {
  return (
    <main>
      <article>
        <h1>11/12/20</h1>
        <h2>On The Street in Brooklyn</h2>
        <img src="https://ps-wise-course.herokuapp.com/fashionblog/blog-image-1.jpg" alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed augue leo. 
          Curabitur bibendum, leo pretium accumsan ullamcorper, nulla velit tincidunt 
          lectus, vitae accumsan sem quam quis metus. Nunc luctus lorem euismod risus 
          euismod iaculis. In hac habitasse platea dictumst. Aliquam interdum a nibh vel 
          hendrerit. Suspendisse pretium mattis tellus, id porttitor neque ullamcorper eget. 
          Mauris laoreet lectus in facilisis varius. Duis pulvinar laoreet diam, vel maximus 
          turpis vulputate nec. Orci varius natoque penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus. Pellentesque aliquet mauris non purus sollicitudin dictum. 
          Suspendisse et ullamcorper leo, 
          in dapibus risus. Duis consectetur arcu erat, eu faucibus risus ultrices sed.</p>
        <a href="#" className="continue-reading">Continue...</a>
      </article>
      <article>
        <h1>11/11/20</h1>
        <h2>Vintage in Vogue</h2>
        <img src="https://ps-wise-course.herokuapp.com/fashionblog/blog-image-2.jpg" alt="Image 2" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere porttitor 
          dapibus. Mauris a ex et nulla porttitor finibus. Duis nec nisi elementum, feugiat 
          risus a, suscipit magna. Morbi a risus eleifend, efficitur dolor nec, tristique 
          felis. Proin pulvinar nibh diam, sit amet rhoncus purus volutpat ac. Fusce interdum 
          blandit magna varius ornare. Curabitur congue orci ac ultrices gravida. Ut at magna 
          nibh. Fusce eget semper mauris. Etiam pretium elit dui. Aliquam arcu nisi, pretium 
          sed rhoncus a, mattis in tellus. Quisque a aliquam eros. Etiam in rhoncus massa. 
          Donec libero mi, tincidunt dictum vulputate sed, sollicitudin vitae dolor.</p>
        <a href="#" className="continue-reading">Continue...</a>
      </article>
    </main>
  );
}

export default Article;