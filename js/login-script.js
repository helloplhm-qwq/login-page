let flag=true
const Switch=()=>{
	if(flag){
		$(".pre-box").css("transform","translateX(100%)")
		$(".pre-box").css("background-color","#c9e0ed")
	}else{
		$(".pre-box").css("transform","translateX(0%)")
		$(".pre-box").css("background-color","#edd4ec")
	}
	flag=!flag
}
