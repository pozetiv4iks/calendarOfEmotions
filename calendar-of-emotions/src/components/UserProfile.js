import React from "react";
import './UserProfile.css';

function UserProfile() {

  return (


<form class="profile-form">
    
    <div class="questions-container">
    <div class="profile-header">Настройте задания под себя</div>
  <div class="profile-row">
    
    <label for="userId" class="profile-label">Ваш ID</label>
    <span id="userId" class="profile-value">11</span>
  </div>

  <div class="toggle-row">
    <label for="ageToggle" class="toggle-label">Вам есть 18 лет?</label>

     <label className="toggle-shape switch"> <input type="checkbox" /> <span className="slider round"></span></label>
  </div>

  <fieldset class="question-group">
    <legend class="question-title">Какой отдых вы предпочитаете?</legend>
    <div class="tags-container">
      <button type="button" class="tag tag-selected">Активный</button>
      <button type="button" class="tag tag-unselected">Пассивный</button>
    </div>
  </fieldset>

  <fieldset class="question-group">
    <legend class="question-title">Для какого количества людей?</legend>
    <div class="tags-container">
      <button type="button" class="tag tag-selected">Для одного</button>
      <button type="button" class="tag tag-unselected">Для пары</button>
      <button type="button" class="tag tag-unselected">Для компании</button>
    </div>
  </fieldset>

  <fieldset class="question-group">
    <legend class="question-title">Ваши интересы</legend>
    <div class="tags-container">
      <button type="button" class="tag tag-selected">Чтение</button>
      <button type="button" class="tag tag-disabled">Фильмы и сериалы</button>
      <button type="button" class="tag tag-unselected">Общение</button>
      <button type="button" class="tag tag-unselected">Бег</button>
      <button type="button" class="tag tag-unselected">Медитации</button>
      <button type="button" class="tag tag-selected">Еда</button>
      <button type="button" class="tag tag-unselected">Рукоделие</button>
      <button type="button" class="tag tag-selected">Путешествия</button>
      <button type="button" class="tag tag-unselected">Семья</button>
      <button type="button" class="tag tag-selected">Развитие</button>
    </div>
  </fieldset>
  </div>
  <button type="button" class="tag tag-unselected big">Сохранить</button>
</form>
  )
}

export default UserProfile
