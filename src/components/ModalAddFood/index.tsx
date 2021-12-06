import { 
  useRef, 
  useState 
} from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Form } from './styles';
import { Modal } from '../Modal';
import Input from '../Input';
import { IFood } from '../../common/types';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: IAddFood) => void;
}

type IAddFood = Omit<IFood, 'id' | 'available'>;

export function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: IAddFood) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input 
          name="image" 
          placeholder="Cole o link aqui" 
        />

        <Input 
          name="name" 
          placeholder="Ex: Moda Italiana" 
        />
        
        <Input 
          name="price" 
          placeholder="Ex: 19.90" 
        />

        <Input 
          name="description" 
          placeholder="Descrição" 
        />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}