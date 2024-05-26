
 import '../Styles/Home.css'
 
 function Home() {
   return (
     <>
     <section className="Home">
      <div className="con">
        <div className="grid">
         
          <div className="content">
          <p>We are the World Best IT Company</p>
              <h1>Welcome to Ayesha <br />Akhtar</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <button type='submit' className='submit'>Connect Now</button>
              <button type='submit' className='submit'>learn More</button>
          </div>
          <div className="image">
            <img src="123.png" alt="" width={400} height={400}/>
          </div>
        </div>
       
      </div>
     </section>
     </>
   )
 }
 
 export default Home