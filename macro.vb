' Macro to export multiple files as individual photos in CorelDRAW

Sub ExportFilesAsPhotos()
    Dim folderPath
    Dim files, file
    Dim exportPath

    ' Specify the folder containing your CorelDRAW files
    folderPath = "C:\Path\To\Your\Files"

    ' Specify the folder where you want to export the photos
    exportPath = "C:\Path\To\Export\Location"

    ' Create CorelDRAW application object
    Set corelApp = CreateObject("CorelDRAW.Application")

    ' Get the list of files in the specified folder
    Set files = CreateObject("Scripting.FileSystemObject").GetFolder(folderPath).Files

    ' Loop through each file in the folder
    For Each file In files
        ' Check if the file is a CorelDRAW file
        If LCase(Right(file.Name, 4)) = ".cdr" Then
            ' Open the CorelDRAW file
            Set doc = corelApp.Documents.Open(file.Path)

            ' Create a unique export file name
            exportFileName = exportPath & "\" & Left(file.Name, Len(file.Name) - 4) & ".png"

            ' Export the file as a PNG image
            doc.ExportBitmap exportFileName, 1, 300, 300

            ' Close the CorelDRAW file without saving changes
            doc.Close False
        End If
    Next

    ' Release CorelDRAW application object
    Set corelApp = Nothing
End Sub
