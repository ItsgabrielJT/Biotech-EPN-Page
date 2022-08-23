import React from 'react'

const Content = () => {
  return (
    <>
        <div class="flex flex-col w-full">
            <div class="grid h-20 card bg-primary place-items-center rounded-none font-bold text-neutral-content ">Talleres y Seminarios</div> 
        </div>
        <div class="flex flex-wrap place-content-center">
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Buy Now</button>
                  </div>
                </div>
            </div>
    
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Buy Now</button>
                  </div>
                </div>
            </div>
    
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Buy Now</button>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Content