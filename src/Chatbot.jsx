import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("");

  useEffect(() => {
    // Вызов функции или запрос к серверу для инициализации искусственного интеллекта
    // ...
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Отправка пользовательского ввода на сервер для обработки и получения ответа от искусственного интеллекта
    try {
      const response = await fetch.post("/api/chatbot", { userInput });

      // Обновление состояния ответа от искусственного интеллекта
      setBotResponse(response.data);
    } catch (error) {
      console.error(error);
    }

    // Очистка пользовательского ввода
    setUserInput("");
  };

  return (
    <div>
      <h1>Чатбот</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Введите сообщение..."
        />
        <button type="submit">Отправить</button>
      </form>
      {botResponse && <p>Ответ: {botResponse}</p>}
    </div>
  );
};

export default Chatbot;
