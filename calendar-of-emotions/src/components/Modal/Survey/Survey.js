import React, { useContext } from 'react';
import './Survey.css';
import { UserContext } from '../../../userContext'; 

export default function Survey({handler}) {

    const context = useContext(UserContext);
    const userId = context.userId.id;
    
    console.log(userId, 'id in survy');

  return (
<div>

<form >
    
    <div class="questions-container">
    <div class="profile-header">Настройте задания под себя</div>
  <div class="profile-row">
    
    <label for="userId" class="profile-label">Ваш ID</label>
    <span id="userId" class="profile-value">{userId ? (userId) : ('Error')}</span>
  </div>

  <div class="toggle-row">
    <label for="ageToggle" class="toggle-label">Вам есть 18 лет?</label>

     <label className="toggle-shape switch"> <input type="checkbox" /> <span className="slider round"></span></label>
  </div>

  <div class="question-group">
    <legend class="question-title">Тип личности</legend>
    <div class="tags-container">
      <button type="button" class="tag tag-selected">Экстраверт</button>
      <button type="button" class="tag tag-unselected">Интроверт</button>
    </div>
  </div>

  <div class="question-group">
    <legend class="question-title">Пол</legend>
    <div class="tags-container">
      <button type="button" name="gender" value="Мужчина" class="tag tag-selected">Мужчина</button>
      <button type="button" name="gender" value="Женщина" class="tag tag-unselected">Женщина</button>
    </div>
  </div>

  
  </div>
  <button type="button" class="big-save-btn "  onClick={handler}>Сохранить</button>
</form>
   </div>    
  
  )
}
