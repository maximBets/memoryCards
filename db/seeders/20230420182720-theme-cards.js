// импортируем модели ИЗ ПАПКИ models
const { Theme, Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    const theme = await Theme.bulkCreate(
      [
        {
          theme_title: 'Дикие животные',
          // Чтобы добавить Theme с еe картачками указываем Theme в виде
          // массива с ключом Cards (название таблицы)
          Cards: [
            {
              eng_word: 'leopard',
              rus_word: 'барс',
            },
            {
              eng_word: 'squirrel',
              rus_word: 'белка',
            },
            {
              eng_word: 'fox',
              rus_word: 'лиса',
            },
            {
              eng_word: 'wolf',
              rus_word: 'волк',
            },
            {
              eng_word: 'hare',
              rus_word: 'заяц',
            },
            {
              eng_word: 'wolverine',
              rus_word: 'россомаха',
            },
            {
              eng_word: 'wild beer',
              rus_word: 'дикое пиво',
            },
            {
              eng_word: 'deer',
              rus_word: 'олень',
            },
            {
              eng_word: 'chipmunk',
              rus_word: 'бурундук',
            },
            {
              eng_word: 'lynx',
              rus_word: 'рысь',
            },
          ],
        },
        {
          theme_title: 'Фрукты',
          Cards: [
            { eng_word: 'ananas', rus_word: 'ананас' },
            { eng_word: 'pear', rus_word: 'груша' },
            { eng_word: 'grapes', rus_word: 'виноград' },
            { eng_word: 'apricot', rus_word: 'абрикос' },
            { eng_word: 'mango', rus_word: 'манго' },
            { eng_word: 'peach', rus_word: 'персик' },
            { eng_word: 'persimmon', rus_word: 'хурма' },
            { eng_word: 'banana', rus_word: 'банан' },
            { eng_word: 'kiwi', rus_word: 'киви' },
            { eng_word: 'pomegranate', rus_word: 'гранат' },
          ],
        },
        {
          theme_title: 'Части тела',
          Cards: [
            { eng_word: 'back', rus_word: 'спина' },
            {
              eng_word: 'abdomen',
              rus_word: 'брюшная полость',
            },
            { eng_word: 'palm', rus_word: 'ладонь' },
            { eng_word: 'sole', rus_word: 'ступня' },
            { eng_word: 'elbow', rus_word: 'локоть' },
            { eng_word: 'shoulder', rus_word: 'плечо' },
            { eng_word: 'chest', rus_word: 'грудь' },
            { eng_word: 'leg', rus_word: 'нога' },
            { eng_word: 'wrist', rus_word: 'запястье' },
            { eng_word: 'knee', rus_word: 'колено' },
          ],
        },
        {
          theme_title: 'Антонимы',
          Cards: [
            {
              eng_word: 'big',
              rus_word: 'большой',
            },
            {
              eng_word: 'small',
              rus_word: 'маленький',
            },
            {
              eng_word: 'new',
              rus_word: 'новый',
            },
            {
              eng_word: 'old',
              rus_word: 'старый',
            },
            {
              eng_word: 'heavy',
              rus_word: 'тяжелый',
            },
            {
              eng_word: 'light',
              rus_word: 'легкий',
            },
            {
              eng_word: 'soft',
              rus_word: 'мягкий',
            },
            {
              eng_word: 'tough',
              rus_word: 'жесткий',
            },
            {
              eng_word: 'clean',
              rus_word: 'чистый',
            },
            {
              eng_word: 'dirty',
              rus_word: 'грязный',
            },
          ],
        },
        {
          theme_title: 'Электроника',
          Cards: [
            { eng_word: 'laptop', rus_word: 'ноутбук' },
            { eng_word: 'tablet', rus_word: 'планшет' },
            { eng_word: 'fridge', rus_word: 'холодильник' },
            { eng_word: 'vacuum cleaner', rus_word: 'пылесос' },
            {
              eng_word: 'sewing machine',
              rus_word: 'швейная машинка',
            },
            { eng_word: 'fan', rus_word: 'вентилятор' },
            { eng_word: 'extractor hood', rus_word: 'вытяжка' },
            { eng_word: 'scales', rus_word: 'весы' },
            {
              eng_word: 'electric kettle',
              rus_word: 'электрический чайник',
            },
            {
              eng_word: 'multicooker',
              rus_word: 'мультиварка',
            },
          ],
        },
        {
          theme_title: 'Сказки',
          Cards: [
            { eng_word: 'king', rus_word: 'король' },
            { eng_word: 'princess', rus_word: 'принцесса' },
            { eng_word: 'knight', rus_word: 'рыцарь' },
            { eng_word: 'giant', rus_word: 'великан' },
            { eng_word: 'tower', rus_word: 'башня' },
            { eng_word: 'throne', rus_word: 'трон' },
            { eng_word: 'sword', rus_word: 'меч' },
            { eng_word: 'shield', rus_word: 'щит' },
            {
              eng_word: 'hald of the kindom',
              rus_word: 'полцарства',
            },
            { eng_word: 'frog', rus_word: 'лягушка' },
          ],
        },
      ],
      {
        // чтобы создать человека вместе с контактами прописываем эту опцию
        // в массив кладём ту модель, связь с которой мы хотим использовать
        include: [Card],
      }
    );
  },

  async down() {
    // удаляем все данные из таблицы People
    // { cascade: true } - позволяет удалить и все связанные данные
    await Theme.destroy({ truncate: { cascade: true } });
  },
};
