import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style.module.css";

function Answers() {
  const [id, setId] = useState(0);
 
  const answer = [
    {id: 1, name: "What affects the price?", text: "  Lorem ipsum dolor sit amet consectetur. Integer sit vel quisque laoreet lacus at. Adipiscing lacinia sit platea a nunc libero. In ut adipiscing urna pellentesque amet varius posuere quis. Amet justo senectus at pellentesque phasellus fringilla nec. Adipiscing iaculis placerat malesuada nisi nisi."},
    {id: 2, name: "Is the lorem ipsum dolor sit amet?", text: "Lorem ipsum dolor sit amet consectetur. Integer sit vel quisque laoreet lacus at. Adipiscing lacinia sit platea a nunc libero. In ut adipiscing urna pellentesque amet varius posuere quis. Amet justo senectus at pellentesque phasellus fringilla nec. Adipiscing iaculis placerat malesuada nisi nisi."},
    {id: 3, name: "What affects the price?", text: "Lorem ipsum dolor sit amet consectetur. Integer sit vel quisque laoreet lacus at. Adipiscing lacinia sit platea a nunc libero. In ut adipiscing urna pellentesque amet varius posuere quis. Amet justo senectus at pellentesque phasellus fringilla nec. Adipiscing iaculis placerat malesuada nisi nisi."},
    {id: 4, name: "Is the lorem ipsum dolor sit amet?", text: "Lorem ipsum dolor sit amet consectetur. Integer sit vel quisque laoreet lacus at. Adipiscing lacinia sit platea a nunc libero. In ut adipiscing urna pellentesque amet varius posuere quis. Amet justo senectus at pellentesque phasellus fringilla nec. Adipiscing iaculis placerat malesuada nisi nisi."}
  ];

  const handleOpen = (id) => {
    answer.map((item) => {
      if(item.id === id) {
        setId(id);
      }
    })
  }


  return (
    <div className={styles.answers_block}>
      <button>Answers to Questions</button>

      <div className={styles.answers_many_blocks}>
        {answer.map((item) => {
          return (
            <div 
              key={item.id} 
              className={id === item.id ? styles.answer_open : styles.answer_close}
              onClick={() => handleOpen(item.id)}
              >
              <h1 className={styles.answer_name}>{item.name}</h1>
                
              <AnimatePresence>
                  {id === item.id &&
                    <motion.p 
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.5}}
                      className={styles.answer_text}
                    >
                    {item.text}
                    </motion.p>
                  }
              </AnimatePresence>

              {id == item.id ? <h1 className={styles.plus_minus}>-</h1> 
              : 
              <h1 className={styles.plus_minus}>+</h1>
              }
            </div> 
          )
        })}
       
      </div>
    </div>
  );
}

export default Answers;
