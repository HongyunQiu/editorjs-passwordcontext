@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

echo 开始构建 editorjs-passwordcontext 插件...
call npx --yes vite build
set BUILD_RESULT=!ERRORLEVEL!

echo.
echo 构建完成，返回码: !BUILD_RESULT!

if !BUILD_RESULT! NEQ 0 (
    echo 构建失败！错误代码: !BUILD_RESULT!
    pause
    exit /b !BUILD_RESULT!
)

echo 构建成功，开始复制文件到 QNotes/public/vendor/editorjs-password ...
echo.

if not exist "dist\password.umd.js" (
    echo 错误：找不到 dist\password.umd.js 文件！
    pause
    exit /b 1
)



echo 源文件存在:
echo - dist\password.umd.js
echo - dist\password.mjs
echo - dist\index.d.ts

if not exist "..\..\QNotes\public\vendor\editorjs-password" (
    echo 创建目标目录...
    mkdir "..\..\QNotes\public\vendor\editorjs-password"
    set MKDIR_RESULT=!ERRORLEVEL!
    if !MKDIR_RESULT! NEQ 0 (
        echo 创建目录失败！错误代码: !MKDIR_RESULT!
        pause
        exit /b !MKDIR_RESULT!
    )
    echo 目标目录创建成功
)

echo 正在复制文件...
copy /Y "dist\password.umd.js" "..\..\QNotes\public\vendor\editorjs-password\password.umd.js" >nul
set COPY_RESULT_1=!ERRORLEVEL!



if !COPY_RESULT_1! NEQ 0 (
    echo 文件复制失败：password.umd.js，错误代码: !COPY_RESULT_1!
    pause
    exit /b !COPY_RESULT_1!
)



echo 文件复制成功！

echo.
echo ========================================
echo 完成！editorjs-passwordcontext 构建与复制已成功执行。
echo ========================================
pause

