import React from "react";

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Якщо метод був викликаний, отже, є помилка!
    // Встановлюємо стан
    this.setState({ hasError: true });
    // Також можна надіслати звіт про помилку вашому аналітичному сервісу
    // logErrorToMyService(error, info);
  }

  render() {
    // Якщо є помилка...
    if (this.state.hasError) {
      // Рендеримо fallback UI
      return <h1>Something went wrong, please try again later:(</h1>;
    }
    // Якщо все ок, рендеримо дітей
    return this.props.children;
  }
}
