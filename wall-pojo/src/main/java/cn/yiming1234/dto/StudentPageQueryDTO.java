package cn.yiming1234.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class StudentPageQueryDTO implements Serializable {

    //用户姓名
    private String username;

    //用户学号
    private String studentId;

    //页码
    private int page;

    //每页显示记录数
    private int pageSize;

}
