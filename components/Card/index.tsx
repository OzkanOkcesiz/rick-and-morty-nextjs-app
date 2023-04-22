import React, { useState } from 'react'
import Modal from '../Modal';


const Card = ({ character }: any) => {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div onClick={handleModal} className='card m-4 rounded-md shadow-lg shadow-cyan-500/40 ease-in-out duration-300 hover:shadow-cyan-500/90'>
            <img src={character.image} width={300} height={300} className="image" alt="character" />
            <div className="description text-cyan-100">
                <p className="name text-cyan-100">{character.name}</p>
                <p className="status text-cyan-100">
                    {character.status}
                </p>
            </div>
            {showModal && (
                <div className='modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center'>
                    <div className='modal-content bg-cyan-950 rounded-lg p-4'>
                        <img src={character.image} width={300} height={300} className="image" alt="character" />
                        <p className="name text-cyan-100">{character.name}</p>
                        <p className="status text-cyan-100">
                            {character.status}
                        </p>
                        <button className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded' onClick={handleModal}>
                            Kapat
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card
