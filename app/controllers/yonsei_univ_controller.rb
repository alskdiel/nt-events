class YonseiUnivController < ApplicationController
  def submit
    f = YonseiUniv.create(feedback: params[:feed])
    num = f.id

    return render json: {
      ret: true,
      research_num: num
    }
  end
end
