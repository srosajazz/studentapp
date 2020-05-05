import React, { useState, FormEvent} from 'react';
import { FiChevronRight }  from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import {Title, Form, Repositories } from './styles';

// Interface
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories]= useState<Repository[]>([]);

async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
  event.preventDefault();
  //Add new repositories

  // CHAMADA API do github
  const response = await api.get(`repos/${newRepo}`);
  // console.log(response.data);

  const repository = response.data;

  setRepositories([...repositories, repository]);
  //clear thenput value
  setNewRepo('');



  //Save new repositories in the State
}

  return (
    <>
    <img src={logoImg} alt="logo"/>
    <Title>Student Hub</Title>

    <Form onSubmit={handleAddRepository}>
      <input
      value={newRepo}
      onChange={(e) => setNewRepo(e.target.value)}
      placeholder="Enter the Student name"/>
      <button type="submit">Search</button>
    </Form>

    <Repositories>
      {repositories.map(repository => (
        <a key={repository.full_name}  href="test">
        <img src={repository.owner.avatar_url}
        alt={repository.owner.login}
        />
        <div>
          <strong>{repository.owner.avatar_url}</strong>
          <p>{repository.owner.login}</p>
        </div>
          {/* FiChevronRight -> icons */}
        <FiChevronRight size={20}/>
      </a>
      ))}
    </Repositories>
   </>
  );

}

export default Dashboard;
