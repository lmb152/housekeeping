<?php
namespace Admin\Controller;
use Think\Controller;
use Admin\Common\CommonController;
class IndexController extends CommonController {
    public function index(){
    	$this->display();
    }
    // 登录
    public function login(){
        if(!I('param.')){
            exit;
        }
    	$user=M('user');
    	$condition['name'] = trim($_POST['username']);
		$condition['pwd'] = trim($_POST['password']);
    	if($condition['name'] && $condition['pwd']){
    		$condition['pwd']=md5($condition['pwd']);
			$userInfo=$user->where($condition)->select();
			if($userInfo){
				$_SESSION['uname']=$userInfo[0]['name'];
				$this->redirect('/admin/index');
			}else{
				$this->error('用户名或密码错误',U('/admin/index'));
			}
    	}else{
    		$this->error('请输入用户名和密码',U('/admin/index'));
    	}
    	
    }
    //注销
    public function logout(){
    	unset($_SESSION['uname']);
    	$this->redirect('admin/index/login');
    	
    }
    public function left(){
    	$artkind=M('artkind');
    	$artkind_content=array();
    	// 获取主分类
    	$condition['parent']=0;
    	$artkind_parents=$artkind->where($condition)->select();
    	unset($condition);
    	foreach ($artkind_parents as $k => $v) {
    		$artkind_content[$k][0]=$v;
    		$condition['parent']=$v['id'];
    		$artkind_childs=$artkind->where($condition)->select();
    		if($artkind_childs){
    			$artkind_content[$k][1]=$artkind_childs;
    		}else{
    			$artkind_content[$k][1][]=$v;
    		}
    	}
    	$this->assign('leftmenu',$artkind_content);
        $this->display('/left');
    }
}