import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion";


function App() {
  return (
    <div className="App">
       <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      />
    </div>
    </div>
  );
}

export default App;
