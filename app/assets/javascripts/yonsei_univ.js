var yonsei;
yonsei  = function() {
  openModal();

  function openModal() {
    $("#modal-form").modal();
    $('.modal-dialog.form').css('display', 'block');
    $('.modal-dialog.result').css('display', 'none');
  }

  $('.modal-dialog.form .complete .btn-okay').on('click', function() {
    var feed = $(this).parent().parent().find('.modal-body').find('textarea').val();
    if(feed !== "") {
      submitUserFeedback(feed);
    } else {
      alert("후기를 입력해주세요.");
    }
  });

  $('.modal-dialog.result .complete .btn-okay').on('click', function() {
    open(location, '_self').close();
  });

  function submitUserFeedback(feed) {
    $.ajax({
      url: '/submit',
      type: 'POST',
      dataType: 'json',
      data: { feed: feed },
      complete: function (jqXHR, textStatus) {
        // callback
      },
      success: function (data, textStatus, jqXHR) {
        if(data.ret) {
          var research_num = data.research_num;
          $('.modal-dialog.result .modal-body .result').text("응모번호: " + research_num);

          $('.modal-dialog.form').css('display', 'none');
          $('.modal-dialog.result').css('display', 'block');
        } else {
          alert("전송에 실패했습니다.");
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // error callback
      }
    });
  }
}

$(document).on('turbolinks:load', yonsei);
