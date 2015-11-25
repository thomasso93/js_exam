function getTaskTemplate(task) {
  return "<div class='task'>" +
                "<input type='checkbox' class='task-checkbox' name='done'>" +
                "<input type='text' class='singleTask' value='"
                    + task + 
                "'>" +
                "<button class='task-edit'>Edit</div>"
         "</div>";    
    
};