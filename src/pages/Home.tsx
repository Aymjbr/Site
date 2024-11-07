// import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo/Logo';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
      <p className="mt-4">This is the home page of our application.</p>
      <Button>Click me</Button>
      <Logo />
    </div>
  );
};

export default Home; 