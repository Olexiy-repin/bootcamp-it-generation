/*
 * try/catch
 * Ошибки фазы парсинга обработать нельзя. Только ошибки фазы выполнения.
 * Объект ошибки
 * try/catch работает только с синхронным кодом
 * Обработка ошибок в асинхронном коде
 */

console.log('First');

setTimeout(() => {
  try {
    const str = JSON.parse('sdfkjclksjdflkds');
  } catch (err) {
    console.log(err);
  }
}, 1000);

console.log('Second');
