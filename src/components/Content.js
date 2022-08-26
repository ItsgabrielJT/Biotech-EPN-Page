import React from 'react'
import estadistica from "../assets/images/estadisticaApli.jpg";
import matlab from "../assets/images/bioinformatica1.jpg";

const Content = () => {
  return (
    <>
        <div class="flex flex-col w-full">
            <div class="grid h-20 card bg-primary place-items-center rounded-none font-bold text-neutral-content ">Talleres y Seminarios</div> 
        </div>
        <div class="flex flex-wrap place-content-center">
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Python Fundamentals" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Fundamentos de python</h2>
                  <p>Maneja funciones, estructuras y objetos !</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Ver</button>
                  </div>
                </div>
            </div>
    
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src={estadistica} alt="Estadistica Aplicada" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Estadística Aplicada</h2>
                  <p>Aplica conceptos de estadística inferencial y descriptiva !</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Ver</button>
                  </div>
                </div>
            </div>
    
            <div class="card card-compact w-96 bg-base-200 m-8 shadow-xl">
                <figure><img src={matlab} alt="MatLab" /></figure>
                <div class="card-body">
                  <h2 class="card-title">MatLab</h2>
                  <p>Trabaja en entorno matemática para modelar tus datos !</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-accent">Ver</button>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Content