import React, { useState } from 'react'


const Card = ({ character }: any) => {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div onClick={handleModal} className='card m-4 rounded-md shadow-lg shadow-cyan-500/40 ease-in-out duration-300 hover:shadow-cyan-500/90'>
            <img src={character.image} width={300} height={300} className="image rounded-t-lg" alt="character" />
            <div className="description">
                <p className="name text-cyan-100 text-center my-3">{character.name}</p>
            </div>
            {showModal && (
                <div className='modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center'>
                    <div className='modal-content bg-cyan-950 rounded-lg p-4 flex flex-col'>
                        <img src={character.image} width={300} height={300} className="image rounded-lg" alt="character" />
                        <p className="name text-cyan-100">{`Name: ${character.name}`}</p>
                        <p className="status text-cyan-100">{`Status: ${character.status}`}</p>
                        <p className="status text-cyan-100">{`Species: ${character.species}`}</p>
                        <p className="status text-cyan-100">{`Created: ${character.created}`}</p>
                        <button className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4 ml-auto' onClick={handleModal}>
                            Kapat
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card
