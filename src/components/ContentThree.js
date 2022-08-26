import React from 'react'

const ContentThree = () => {
  return (
    <>
        <div class="flex flex-col w-full">
            <div class="grid h-20 card bg-primary place-items-center rounded-none font-bold text-neutral-content "> Otros Recursos</div> 
        </div>
        <div class="flex flex-wrap place-content-center">
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">DataSet 1</h2>
                  <p>Proximamente !</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Ver</button>
                  </div>
                </div>
            </div>
    
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">DataSet 2</h2>
                  <p>Proximamente !</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Ver</button>
                  </div>
                </div>
            </div>
    
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">DataSet 3</h2>
                  <p>Proximamente !</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Ver</button>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContentThree