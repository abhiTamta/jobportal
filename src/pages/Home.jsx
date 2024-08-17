import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Home = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-center flex-col">
        <div className="headingTitle text-center pt-24 pb-16">
          <h1 className='text-5xl font-bold mb-3'>Find your dream job now</h1>
          <h4 className='text-xl'>5 lakh+ jobs for you to explore</h4>
        </div>
        <div className="jobSearchSection w-10/12 mx-auto p-4 rounded-3xl bg-white shadow-lg">
          <form action="" method='post'>
            <FaSearch />
            <input type='text' name='' placeholder='Enter skill / ' id='' />
            <select name="" id="">
              <option value="1">1</option>
            </select>
            <input type="text" name='' placeholder='' id='' />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home