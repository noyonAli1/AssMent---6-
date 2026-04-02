import React, { use} from 'react';
import ModelsCard from '../modelsCard/ModelsCard';

const Models = ({modelPromise , cart , setCart}) => {
   
    // console.log(modelPromise);
    const modelData = use(modelPromise)
    // console.log(modelData);
    return (
        <div className='py-20'>
        
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  px-4'>
                {modelData.map(model => <ModelsCard key={model.id} model={model} cart={cart} setCart={setCart}  ></ModelsCard>)}
            </div>

        </div>
    );
};

export default Models;
