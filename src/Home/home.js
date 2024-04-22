import './home.css';
const Home = () =>{


    return(
        <div>
        <div className="views">
           <img src='https://www.bogart.ro/wp-content/uploads/2022/02/colaj-bogart-general-contractor_opt.jpg' alt='cities' />
        </div>
        <div className='sndlayer'>
            <h3>
            Bog’Art is an integrated building company based in Bucharest and is one of the largest general contractors in Romania. The company is a family business established in 1991 and has become a market leader in civil construction.<br></br><br></br>

We are most reputable for landmark projects requiring complex and innovative technical solutions. Our hands-on management and highly qualified staff promote a client-oriented culture that aims to optimize processes. We achieve quality performance and timely completion of our projects through our full range of building services.
            </h3>
            <h1> At a glance:</h1>
            <div className='tags'>
            <ul>
            <li><h2><a href='https://www.bogart.ro/about/#sec4'>THE <strong>GOBBART TEAM</strong></a></h2></li>
            <li><h2><a href='https://www.bogart.ro/about/#sec3'>OUR VALUES AND STRATEGY</a></h2></li>
            <li><h2><a href='https://www.bogart.ro/services/#timeline'>OUR ACHIEVMENTS</a></h2></li>
            </ul>
            </div>
            <p className='em-1'>&nbsp;</p>
            <div className='pot-contain'>
            <button className='pot-button'>View Our Portfolio</button>
            </div>
        </div>


        <div className='thirdlayer'>
        <div className='bl'>
        <div className='layer-3'>
        <div className='section-1'>
            <h1><span>KEY</span>      <strong>FIGURES</strong></h1>
            <h2>Our continuous growth is sustained by always implementing cutting-edge technology and delivering the highest quality services as a general contractor. This has allowed us to secure some of the largest projects across the Romanian market.</h2>
            </div>
            <div className='section-2'> 
            <div className='line'></div>
            <div className='data-1'>
                <div><h3>30</h3><p>years of activity</p></div>
                <div><h3>+600</h3><p className='end'>projects</p></div>
                <div><h3>3</h3><p>million sqm delivered</p></div>
                <div><h3>€ 1.6</h3><p>billion contracted value</p></div>
            </div>
            </div>
        </div>
        </div>
        </div>


        <div className='forthlayer'>
            <div><h1>Activities</h1><img src='https://www.bogart.ro/wp-content/uploads/2016/02/blocks-297x300.png' alt='ACTIVITY'/></div>
            <div><h1>Video Room</h1><img src='https://www.bogart.ro/wp-content/uploads/2019/04/bogart-video-room.jpg' alt='VIDEO ROOM'/></div>
        </div>
        </div>
    );
};

export default Home;